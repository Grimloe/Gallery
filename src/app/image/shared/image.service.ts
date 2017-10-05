import { Injectable } from '@angular/core';

@Injectable()
export class ImageService
{
    visibleImages = [];
    getImages()
    {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number)
    {
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =
[
    {"id": 1, "category": "Nagano Prefecture", "caption": "Before the boat festival", "url": "assets/img/Boat_Festival_01.jpg"},
    {"id": 2, "category": "Nagano Prefecture", "caption": "During the boat festival", "url": "assets/img/Boat_Festival_02.jpg"},
    {"id": 3, "category": "Nagano Prefecture", "caption": "Picture with friends at Natsuki's hometown", "url": "assets/img/Nagano_01.jpg"},
    {"id": 4, "category": "Nagano Prefecture", "caption": "Zenkouji Temple, Nagano City", "url": "assets/img/Nagano_02.jpg"},
    {"id": 5, "category": "Nagano Prefecture", "caption": "Suwa Lake", "url": "assets/img/Nagano_03.jpg"},
    {"id": 6, "category": "Trips Outside Nagano", "caption": "A shrine in Kyoto", "url": "assets/img/Kyoto_01.jpg"},
    {"id": 7, "category": "Trips Outside Nagano", "caption": "Asakusa Temple, Tokyo", "url": "assets/img/Tokyo_01.jpg"},
    {"id": 8, "category": "Trips Outside Nagano", "caption": "Myself on Mt.Fuji", "url": "assets/img/Fuji_01.jpg"},
    {"id": 9, "category": "JSA", "caption": "Dinner with Japanese Club", "url": "assets/img/JSA_01.jpg"},
    {"id": 10, "category": "JSA", "caption": "Before Cultural Night", "url": "assets/img/JSA_02.jpg"},
    {"id": 11, "category": "JSA", "caption": "At the Bazar selling ramen", "url": "assets/img/JSA_03.jpg"},
    {"id": 12, "category": "Kamikouchi", "caption": "First sight of Kamikouchi", "url": "assets/img/Kamikouchi_01.JPG"},
    {"id": 13, "category": "Kamikouchi", "caption": "Shiho taking pictures", "url": "assets/img/Kamikouchi_02.JPG"},
    {"id": 14, "category": "Kamikouchi", "caption": "Mountains of Kamikouchi", "url": "assets/img/Kamikouchi_03.JPG"},
    {"id": 15, "category": "Kamikouchi", "caption": "Myself posing in fromt of the scenery", "url": "assets/img/Kamikouchi_04.JPG"},
    {"id": 16, "category": "Kamikouchi", "caption": "One of many monkeys at Kamikouchi", "url": "assets/img/Kamikouchi_05.JPG"},
    {"id": 17, "category": "Matsumoto", "caption": "It snows a lot in Matsumoto", "url": "assets/img/Matsumoto_01.jpg"},
    {"id": 18, "category": "Matsumoto", "caption": "Hanami in Matsumoto", "url": "assets/img/Matsumoto_02.jpg"},
    {"id": 19, "category": "Matsumoto", "caption": "Boys day in Matsumoto", "url": "assets/img/Matsumoto_03.jpg"},
    {"id": 20, "category": "Matsumoto", "caption": "The beautiful landscape in Matsumoto", "url": "assets/img/Matsumoto_04.jpg"},
    {"id": 21, "category": "Matsumoto", "caption": "The Metoba River, Matsumoto", "url": "assets/img/Matsumoto_05.jpg"},
    {"id": 22, "category": "Matsumoto", "caption": "Matsumoto Castle", "url": "assets/img/Matsumoto_06.jpg"},
]