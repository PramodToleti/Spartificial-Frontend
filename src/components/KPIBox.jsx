import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const KPIBox = ({ title, count, className }) => {
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 700;
    const increment = count / (duration / 16.66);

    const animateCount = () => {
      start += increment;
      if (start < count) {
        setAnimatedCount(Math.ceil(start));
        requestAnimationFrame(animateCount);
      } else {
        setAnimatedCount(count);
      }
    };

    animateCount();
  }, [count]);

  return (
    <div
      className={`w-full md:max-w-md h-[80%] bg-white border flex flex-col items-center justify-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      <h5 className="text-2xl font-semibold text-center tracking-tight mb-4 text-white">
        {title}
      </h5>
      <span className="text-5xl font-bold text-white">{animatedCount}</span>
    </div>
  );
};

KPIBox.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default KPIBox;
