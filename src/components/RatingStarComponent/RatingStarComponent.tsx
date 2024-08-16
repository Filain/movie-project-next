import {FC} from "react";

import styles from './RatingStarComponent.module.css'

interface RatingProps {
    rating?: number;
}

const Rating: FC<RatingProps> = ({rating=0}) => {
// Визначаємо кількість повних зірок та половинну зірку
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className={styles.starRating}>
            {Array.from({length: 10}, (_, i) => {
                // Перевіряємо, чи ця зірка має бути заповнена
                const isFull = i < fullStars;
                const isHalf = i === fullStars && hasHalfStar;
                const className = `${styles.starRating__star} ${isFull ? styles.isSelected : ''} ${isHalf ? styles.isHalf : ''}`;
                return (
                    <span key={i} className={className}>★</span>
                );
            })}
        </div>
    );
};

export default Rating;