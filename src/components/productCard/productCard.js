import React from "react";

// import * as styles from '../../styles/plp.mod.scss'
import ATCButton from "../atcButton/ATCButton";
import { Link } from "gatsby";

const ProductCard = (props) => {
	return (
		<div className={styles.productCard}>
			<Link to={props.product.handle} className={styles.productCardImage} >
				<img src={props.product.media[0]?.preview.image.src} />
			</Link>
			<div className={styles.productCardInfo}>
				<Link to={props.product.handle} className={styles.productCardTitle} >
					{props.product.title}
				</Link>
				<p className={styles.productCardPrice} >${props.product.variants[0].price}</p>
				<div className={styles.productCardAtcBtnHolder}>
					<ATCButton 
						style={styles.toCartBtn} 
						variantID={props.product.variants[0].shopifyId} 
						quantity={1}
						updateCart={props.updateCart} />
				</div>
			</div>
		</div>
	)
}

export default ProductCard;