import {faker} from '@faker-js/faker'

export const createRandomMovie = () => {
    return `${faker.word.adjective()} ${faker.word.noun()}`
}

export const createRandomSong = () => {
    return faker.music.songName();
}