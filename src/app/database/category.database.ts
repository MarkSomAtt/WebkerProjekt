import { Category } from 'src/app/models/category'


export const CATEGORIES: Category[] = [
    {
        title: 'Billed',
        icon: 'billed',
        value: 'billed',
        color: 'teal',
        url:"/home/billed"

    },
    {
        title: 'Rated',
        icon: 'rated',
        value: 'rated',
        color: 'cyan',
        url:"/home/rated"

    },
    {
        title: 'Rerated',
        icon: 'rerated',
        value: 'rerated',
        color: '#c2185b',
        url:"/home/rerated"

    },
    {
        title: 'Received',
        icon: 'received',
        value: 'received',
        color: 'red',
        url:"/home/received"

    }


];