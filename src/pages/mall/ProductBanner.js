import React, {Component} from 'react';
import Slider from 'react-slick';
import {setLang, getProductDetail} from '../../service/RaceDao';
import {isEmptyObject} from '../../service/utils';
import {Paper, Images, RaisedButton} from '../../components';



export default class ProductBanner extends Component {


    render() {
        const{banners} = this.props;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        if(isEmptyObject(banners)){
            return <div style={styles.banner}></div>
        }
        return (
                <Slider
                    dots
                    infinite
                    autoplay
                    draggable
                    focusOnSelect
                    pauseOnHover
                    autoplaySpeed={2000}>
                    {banners.map((item, index) => {
                        return <div
                            key={`banner${index}`}
                            style={styles.banner}>
                            <img key={`banner${index}`} style={styles.bannerImg} src={item.preview}/>
                        </div>
                    })}
                </Slider>
            )

    }
}


const styles = {

    banner: {
        height: 362,
        width: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        zIndex:999

    },
    bannerImg:{
        width:'contain',
        height:'contain'
    }

};