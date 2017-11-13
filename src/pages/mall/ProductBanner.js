import React, {Component} from 'react';
import {Carousel} from '../../components';
import {setLang, getProductDetail} from '../../service/RaceDao';
import {isEmptyObject} from '../../service/utils';

export default class ProductBanner extends Component {

    render() {
        const{banners} = this.props;
        if(isEmptyObject(banners)){
            return <div style={styles.banner}></div>
        }
        return <Carousel>
            {banners.map((item, index) => {
                return <div
                    key={`banner${index}`}
                    style={styles.banner}>
                    <img style={styles.bannerImg} src={item.preview}/>

                </div>
            })}
        </Carousel>
    }
}


const styles = {

    banner: {
        height: 362,
        width: '100%',

    },
    bannerImg:{
        width:'100%',
        height:'100%'
    }

};