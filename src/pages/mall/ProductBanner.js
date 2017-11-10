import React, {Component} from 'react';
import {Carousel} from '../../components';


export default class ProductBanner extends Component {

    render() {
        let banners = [1, 2, 3, 4, 5];

        return <Carousel>
            {banners.map((item, index) => {
                return <div
                    key={`banner${index}`}
                    style={styles.banner}>
                    {item}

                </div>
            })}
        </Carousel>
    }
}


const styles = {

    banner: {
        height: 360,
        width: '100%',
        backgroundColor: 'yellow'
    }

};