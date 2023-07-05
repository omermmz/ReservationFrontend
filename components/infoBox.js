import React, {useEffect, useRef} from 'react';
import HalisahaListeleStyles from "../styles/halisahaListele.module.css";
import InfoStyles from "../styles/infoBox.module.css";


export function InfoBox(props) {
    const ref = useRef(null);
    const {onClickOutside} = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.show)
        return null;

    return (
        <div ref={ref} className={InfoStyles.infoBox}>
            {props.message}
            <div className={InfoStyles.inDiv}>
                <div className={InfoStyles.labelStyles}>Halısaha Adı:</div>
                <div className={InfoStyles.textStyles}>{props.name}</div>
            </div>
            <div className={InfoStyles.inDiv}>
                <div className={InfoStyles.labelStyles}>Adres:</div>
                <div className={InfoStyles.textStyles}>{props.address}</div>
            </div>
            <div className={InfoStyles.inDiv}>
                <div className={InfoStyles.labelStyles}>Fiyat:</div>
                <div className={InfoStyles.textStyles}>{props.price}</div>
            </div>
            <div className={InfoStyles.inDiv}>
                <div className={InfoStyles.labelStyles}>Kapora Ücreti:</div>
                <div className={InfoStyles.textStyles}>{props.kapora}</div>
            </div>
            <div className={InfoStyles.inDiv}>
                <div className={InfoStyles.labelStyles}>İrtibat Numarası:</div>
                <div className={InfoStyles.textStyles}>{props.phoneNumbers}</div>
            </div>

            <div className={InfoStyles.rezervButton}>Rezervasyon<br/> Yap</div>


        </div>);
}