import { useState, useContext, useEffect } from "react";
import "./ReviewView.css";
import { CounterContext } from "../context/counter_context";

export default function Reviews({ reviews }) {
  const [showForm, setShowForm] = useState(false);
  const { contheme } = useContext(CounterContext);

  const [localReviews, setLocalReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    try {
      return saved ? JSON.parse(saved) : reviews || [];
    } catch {
      return reviews || [];
    }
  });

  const [newReview, setNewReview] = useState({
    name: "",
    text: "",
    rating: 5
  });

  useEffect(() => {
    document.documentElement.dataset.theme = contheme;
  }, [contheme]);

  const saveToLocalStorage = (list) => {
    localStorage.setItem("reviews", JSON.stringify(list));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = [...localReviews, newReview];
    setLocalReviews(updated);
    saveToLocalStorage(updated);

    setNewReview({ name: "", text: "", rating: 5 });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = localReviews.filter((_, i) => i !== index);
    setLocalReviews(updated);
    saveToLocalStorage(updated);
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>

      <div className="reviews-list">
        {localReviews.length === 0 && (
          <p className="reviews-empty">No reviews yet.</p>
        )}

        {localReviews.map((r, i) => (
          <div
            key={i}
            className="review-card"
            onDoubleClick={() => handleDelete(i)} // видалення по кліку
            title="Click to delete"
          >
            <div className="review-header">
              <span className="review-name">{r.name}</span>
              <span className="review-rating">⭐ {r.rating}</span>
            </div>
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>

      {!showForm && (
        <button className="reviews-add-btn" onClick={() => setShowForm(true)}>
          Add Review
        </button>
      )}

      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            required
            value={newReview.name}
            onChange={(e) =>
              setNewReview({ ...newReview, name: e.target.value })
            }
          />

          <textarea
            placeholder="Write your review..."
            required
            value={newReview.text}
            onChange={(e) =>
              setNewReview({ ...newReview, text: e.target.value })
            }
          ></textarea>

          <select
            value={newReview.rating}
            onChange={(e) =>
              setNewReview({ ...newReview, rating: Number(e.target.value) })
            }
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Stars
              </option>
            ))}
          </select>

          <div className="review-form-buttons">
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
