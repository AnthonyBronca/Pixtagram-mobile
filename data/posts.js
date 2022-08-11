import { users } from "./users";

export const posts = [
    {
        imageUrl: 'https://pixtagrambucket.s3.amazonaws.com/nessie_anthony.png',
        user: users[0].user,
        likes: 7890,
        caption: 'Random!!',
        profilePicture: users[0].image,
        comments: [
            {
                user: 'bob',
                comment: 'Wow! this build looks fire!'
            },
            {
                user: 'gary',
                comment: 'meow'
            },
            {
                user: 'testerMan',
                comment: 'Love nessie!!!'
            },
        ],
    },
    {
        imageUrl: 'https://pixtagrambucket.s3.amazonaws.com/milk_seeder.jpeg',
        user: users[1].user,
        likes: 20,
        caption: 'another random!!!',
        profilePicture: users[1].image,
        comments: [
            {
                user: 'Anthony',
                comment: 'Great Job!!'
            },
            {
                user: 'gary',
                comment: 'meow'
            },
        ],
    },
    {
        imageUrl: 'https://pixtagrambucket.s3.amazonaws.com/scuba_seeder.jpeg',
        user: users[0].user,
        likes: 1000,
        caption: 'I am god?!!',
        profilePicture: users[0].image,
        comments: [
            {
                user: 'Jade',
                comment: 'Perfect home screen!'
            },
            {
                user: 'gary',
                comment: 'meow'
            },
        ],
    },
    {
        imageUrl: 'https://pixtagrambucket.s3.amazonaws.com/bri_violin.jpeg',
        user: users[2].user,
        likes: 55,
        caption: 'I play the violen!!',
        profilePicture: users[2].image,
        comments: [
            {
                user: 'anthonybronca',
                comment: 'Awesome tunes!!'
            },
            {
                user: 'maicasantos',
                comment: 'omggg nice pic!'
            },
        ],
    },
    {
        imageUrl: 'https://pixtagrambucket.s3.amazonaws.com/giphy.gif',
        user: users[3].user,
        likes: 77,
        caption: 'Will my gif show?',
        profilePicture: users[3].image,
        comments: [
            {
                user: 'anthonybronca',
                comment: 'Wow! it does!'
            },
            {
                user: 'brianaR',
                comment: 'my eyess are blessed!'
            },
        ],
    },
]
