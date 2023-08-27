import { useMemo } from "react";
import styles from "./CategoryContainer.module.css";
const CategoryContainer = ({
  productDimensions,
  categorySubcategoryText,
  propLeft,
  propTop,
  propGap,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <div className={styles.categoryParent} style={frameDiv1Style}>
        <div className={styles.category}>{productDimensions}</div>
        <img
          className={styles.vectorIcon}
          alt=""
          src={categorySubcategoryText}
        />
      </div>
    </div>
  );
};

export default CategoryContainer;
