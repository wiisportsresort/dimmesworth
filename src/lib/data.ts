import { stripIndent } from 'common-tags'
import { nanoid } from 'nanoid'
import type {
  SerializableFollow,
  SerializablePost,
  SerializableUser,
  UnserializedPost,
  UnserializedUser,
} from './types'

const hesterprynne: UnserializedUser = {
  username: 'hesterprynne',
  displayName: 'Hester Prynne',
  bio: 'Yes, that Hester Prynne.',
  profileImage: {
    type: 'image',
    src: '/img/profile/hesterprynne.png',
  },
  joinDate: new Date('1669-06-09'),
}

const minister_dale: UnserializedUser = {
  username: 'minister_dale',
  displayName: 'Reverend Arthur Dimmesdale',
  bio: '✝️ Medford Grace Church of our Lord',
  profileImage: {
    type: 'image',
    src: '/img/profile/minister_dale.png',
  },
  joinDate: new Date('1669-06-10'),
}

const the_roger_chillingworth: UnserializedUser = {
  username: 'the_roger_chillingworth',
  displayName: 'Roger 😈👨‍⚕️',
  bio: stripIndent`
    Local Doctor
    DM for medical help
  `,
  profileImage: {
    type: 'image',
    src: '/img/profile/the_roger_chillingworth.png',
  },
  joinDate: new Date('1669-02-16'),
}

const the_governor: UnserializedUser = {
  username: 'the_governor',
  displayName: 'Governor Bellingham of Medford, Massachusetts',
  joinDate: new Date('1662-04-23'),
  profileImage: {
    type: 'image',
    src: '/img/profile/the_governor.png',
  },
}

const missyhibbins: UnserializedUser = {
  username: 'missyhibbins',
  displayName: 'Ann Hibbins',
  joinDate: new Date('1662-05-01'),
  profileImage: {
    type: 'image',
    src: '/img/profile/missyhibbins.jpg',
  },
}

const simonsabigail: UnserializedUser = {
  username: 'simonsabigail',
  displayName: 'Abigail Simons',
  bio: 'Hester Prynne DNI',
  joinDate: new Date('1662-07-04'),
  profileImage: {
    type: 'image',
    src: '/img/profile/simonsabigail.jpg',
  },
}

const ilove_hester: UnserializedUser = {
  username: 'ilove_hester',
  displayName: 'Hester Prynne Fanpage',
  joinDate: new Date('1669-04-09'),
  profileImage: {
    type: 'image',
    src: '/img/profile/ilove_hester.gif',
  },
}

const roger_hottingworth: UnserializedUser = {
  username: 'roger_hottingworth',
  displayName: 'Roger Chillingworth Fanpage',
  joinDate: new Date('1669-04-09'),
  profileImage: {
    type: 'image',
    src: '/img/profile/roger_hottingworth.jpg',
  },
}

const arthuwur_dimmy: UnserializedUser = {
  username: 'arthuwur_dimmy',
  displayName: 'Arthur Dimmesdale Fanpage',
  joinDate: new Date('1669-03-01'),
  profileImage: {
    type: 'image',
    src: '/img/profile/arthuwur_dimmy.png',
  },
}

hesterprynne.follows = [the_governor, minister_dale, ilove_hester]
minister_dale.follows = [
  the_governor,
  the_roger_chillingworth,
  missyhibbins,
  simonsabigail,
  ilove_hester,
]
the_roger_chillingworth.follows = [
  minister_dale,
  the_governor,
  missyhibbins,
  simonsabigail,
  roger_hottingworth,
  arthuwur_dimmy,
]
the_governor.follows = [missyhibbins, simonsabigail, minister_dale, the_roger_chillingworth]
missyhibbins.follows = [the_governor, missyhibbins, hesterprynne]
simonsabigail.follows = [minister_dale, the_governor, the_roger_chillingworth, roger_hottingworth]
ilove_hester.follows = [hesterprynne, minister_dale, the_governor]
roger_hottingworth.follows = [the_roger_chillingworth, minister_dale, the_governor]
arthuwur_dimmy.follows = [minister_dale]

const hesterApology: UnserializedPost = {
  author: hesterprynne,
  timestamp: new Date('1669-10-14T22:00:00Z'),
  content: 'Apology/Explanation thread regarding everything, really (1/?):',
  likes: 52,
  comments: [
    {
      author: hesterprynne,
      timestamp: new Date('1669-10-14T22:05:00Z'),
      likes: 50,
      content:
        'Hi. I’m just talking here to get some stuff off my chest (no pun intended), and I felt it was the right time to do it. I know that many of you guys here know me as the woman that committed adultery and has a demon child, and I’m not saying I didn’t do anything wrong (2/?) -',
      comments: [
        {
          author: hesterprynne,
          timestamp: new Date('1669-10-14T22:10:00Z'),
          likes: 47,
          content:
            'I just need to explain some things that I’ve seen some people not completely understand or know about the situation. First and foremost, I am sorry about what I did. I know that many people won’t believe that, but it’s true whether you like it or not. (3/?)',
          comments: [
            {
              author: hesterprynne,
              timestamp: new Date('1669-10-14T22:15:00Z'),
              likes: 48,
              content:
                'I know that what I did was wrong, and I fully understand and accept any and all forms of punishment the law puts on me as a criminal both of law and of soul. If anyone has questions they can simply DM me for anything, but be warned there are some topics that I will not answer (4/?) -',
              comments: [
                {
                  author: hesterprynne,
                  timestamp: new Date('1669-10-14T22:20:00Z'),
                  likes: 45,
                  content:
                    'questions about, especially regarding my lover. I am of the belief that it should be his own actions and/or words that reveal himself, and he can choose to do that whenever he feels it is right. I know he feels just as guilty as I, so please don’t bash him here or anywhere else without knowing (5/?) -',
                  comments: [
                    {
                      author: hesterprynne,
                      timestamp: new Date('1669-10-14T22:25:00Z'),
                      likes: 36,
                      content:
                        'anything about his situation and his feelings on the matter. I will not be revealing anything about my lover here or anywhere else, so please do not ask. I just hope you all can find it in yourselves to let me live in your spaces. I’m not asking for forgiveness, I am simply asking for (6/?) -',
                      comments: [
                        {
                          author: hesterprynne,
                          timestamp: new Date('1669-10-14T22:30:00Z'),
                          likes: 21,
                          content:
                            'acceptance, and at the very least tolerance. If you’ve read this, thank you for hearing me out and I wish you the best. (7/7)',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const data: {
  users: UnserializedUser[]
  posts: UnserializedPost[]
} = {
  users: [
    hesterprynne,
    minister_dale,
    the_roger_chillingworth,
    the_governor,
    missyhibbins,
    simonsabigail,
    ilove_hester,
    roger_hottingworth,
    arthuwur_dimmy,
  ],
  posts: [
    {
      author: hesterprynne,
      timestamp: new Date('1669-09-06T10:00:00Z'),
      content: 'just got released from prison feeling good',
      likes: -24,
      comments: [
        {
          author: the_roger_chillingworth,
          timestamp: 1,
          content: "please respond to my DMs it's important",
        },
      ],
    },
    {
      author: minister_dale,
      timestamp: new Date('1669-09-22T08:15:00Z'),
      content: 'Sunday mass today at 11:00, everyone please come and enjoy my sermon today!',
      likes: 25,
      comments: [
        {
          author: simonsabigail,
          timestamp: 5,
          content: "I can't wait! The reverend's sermons are always a joy to hear! ⛪ 🙏",
          likes: 3,
        },
        {
          author: the_roger_chillingworth,
          timestamp: 0.01,
          content: 'hi honey looking forward to the sermon',
          likes: 2,
          comments: [
            {
              author: minister_dale,
              timestamp: 1,
              content: 'please leave me alone',
              likes: 14,
            },
          ],
        },
      ],
    },
    {
      author: hesterprynne,
      timestamp: new Date('1669-10-13T07:00:00Z'),
      content: 'hi i am hester prinn and i hav a red ledder on all my close AMA',
      likes: 18,
      comments: [
        {
          author: minister_dale,
          timestamp: 2,
          content: 'Pearl, it is not right to steal, please give your mother her phone back',
          likes: 5,
          comments: [
            {
              author: hesterprynne,
              timestamp: 1,
              content: 'wat do you men i am hester prinn',
              likes: 10,
            },
          ],
        },
        {
          author: the_roger_chillingworth,
          timestamp: 7,
          content: 'Pearl would you be a dear and contact your mother on my behalf',
          likes: 4,
          comments: [
            {
              author: hesterprynne,
              timestamp: 0.3,
              content: 'no',
              likes: 52392,
            },
          ],
        },
        {
          author: simonsabigail,
          timestamp: 15,
          content: "This isn't Reddit, devil child. Go somewhere else.",
          likes: 3,
        },
      ],
    },
    {
      author: the_governor,
      timestamp: new Date('1669-10-15T15:00:00Z'),
      likes: 42,
      content:
        'Attention, people of Medford! There is going to be a town hall meeting tomorrow at noon, so please come and share any questions, comments, concerns, or curiosities that you may have regarding current issues and topics relating to Medford!',
    },
    hesterApology,
    {
      author: the_roger_chillingworth,
      timestamp: new Date('1669-11-04T18:49:00Z'),
      likes: 15,
      content:
        'If anyone sees @minister_dale anywhere, please either contact me with info abt where he is or tell him to come back to his house',
      comments: [
        {
          author: simonsabigail,
          timestamp: 3,
          likes: 2,
          content: 'Will do! Anything to help out the reverend ✝️',
        },
        {
          author: the_roger_chillingworth,
          timestamp: 4,
          likes: 25,
          content: 'My brother in Christ I am legitimately 3 blocks away',
        },
      ],
    },
    {
      author: roger_hottingworth,
      timestamp: new Date('1669-11-18T14:29:00Z'),
      likes: 24,
      content:
        '@the_roger_chillingworth is such a good doctor and caretaker! he’s an icon for taking care of our minister so selflessly, ngl',
      comments: [
        {
          author: simonsabigail,
          timestamp: 3,
          likes: 13,
          content: 'Yes, Dr. Chillingworth is truly a blessing upon our community.',
        },
        {
          author: the_governor,
          timestamp: 4,
          likes: 19,
          content:
            'Always good to see that our citizens appreciate the resident physician as much as the rest of us.',
        },
      ],
    },
    {
      author: ilove_hester,
      timestamp: new Date('1669-11-30T13:58:00Z'),
      content: 'happy national hester prynne day!',
      likes: -5,
      comments: [
        {
          author: simonsabigail,
          timestamp: 4,
          likes: 2,
          content:
            'It is extremely disrespectful to our nation as a whole for you to suggest that someone such as Prynne deserves a holiday. Please take down this post.',
        },
        {
          author: arthuwur_dimmy,
          timestamp: 2,
          likes: 1,
          content: 'wdym, every day is hester prynne day',
          comments: [
            {
              author: ilove_hester,
              timestamp: 2,
              content: 'you’re so right, and i’m sorry for suggesting otherwise /lh',
            },
          ],
        },
      ],
    },
    {
      author: hesterprynne,
      timestamp: new Date('1669-12-20T16:48:00Z'),
      content: 'Anyone know any good vacation spots?',
      likes: -1,
      comments: [
        {
          author: simonsabigail,
          timestamp: 7,
          likes: 3,
          content: 'Why are you asking about this? You don’t deserve rest after all you have done.',
        },
        {
          author: ilove_hester,
          timestamp: 0.01,
          likes: 1,
          content:
            'Here’s some pamphlets I found!<br>https://really-good-vacations.ma/pamphlet.pdf<br>https://vacations-r-us.ma/brochure.pdf',
        },
      ],
    },
    {
      author: minister_dale,
      timestamp: new Date('1669-12-21T17:03:00Z'),
      likes: 6,
      content: 'Anyone have any advice on how to deal with overbearing/stalkerish friends?',
      comments: [
        {
          author: ilove_hester,
          timestamp: 1,
          likes: 5,
          content:
            'Try to distance yourselves from each other! Take some time apart to think and then talk after that.',
        },
        {
          author: the_roger_chillingworth,
          timestamp: 2,
          likes: 4,
          content:
            'Talk things over more, try to see things from his/her perspective, it could be enlightening',
        },
      ],
    },
    {
      author: arthuwur_dimmy,
      timestamp: new Date('1669-12-31T18:19:00Z'),
      content: 'anyone else see dimmesdale in town yesterday?? He was acting so weird',
      likes: 7,
      comments: [
        {
          author: ilove_hester,
          timestamp: 2,
          content: 'ikr! maybe something happened?',
          likes: 3,
          comments: [
            {
              author: arthuwur_dimmy,
              timestamp: 5,
              likes: 1,
              content:
                'yeah, i think something did b/c he was doing all that after he came out from the woods for some reason? it was weird',
            },
          ],
        },
        {
          author: simonsabigail,
          timestamp: 4,
          likes: 4,
          content:
            'Please, do not speak so lowly of our dear minister! Trust in his ability to take care of himself and lead by example.',
        },
      ],
    },
    {
      author: minister_dale,
      timestamp: new Date('1671-01-05T08:24:00Z'),
      content: 'I am sorry',
      likes: 21,
      comments: [
        {
          author: minister_dale,
          timestamp: 1,
          content: 'I need to confess my sins',
          likes: 20,
          comments: [
            {
              author: minister_dale,
              timestamp: 1,
              likes: 36,
              content: 'I am the lover of Hester Prynne and father of Pearl Prynne',
              comments: [
                {
                  author: hesterprynne,
                  timestamp: 2,
                  likes: 2,
                  content: 'honey??',
                },
                {
                  author: arthuwur_dimmy,
                  timestamp: 3,
                  likes: 6,
                  content: 'what?? what is Going On',
                },
                {
                  author: ilove_hester,
                  timestamp: 4,
                  likes: 4,
                  content: 'plot twist much',
                },
                {
                  author: the_roger_chillingworth,
                  timestamp: 5,
                  likes: 1,
                  content: 'At long last, a confession',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      author: the_governor,
      timestamp: new Date('1671-01-07T12:52:00Z'),
      likes: 77,
      content:
        'In the last few days, we have all lost a valued and loved member of our community. Please feel free to join us in lamenting the death of our beloved minister, Arthur Dimmesdale. His funeral proceedings will commence in one week’s time.',
      comments: [
        {
          author: simonsabigail,
          timestamp: 10,
          likes: 48,
          content:
            'He was such a wonderful person, full of kindness when we needed it most. Minister Dimmesdale will most definitely be hugely missed.',
        },
        {
          author: ilove_hester,
          timestamp: 12,
          likes: 32,
          content: 'sending thoughts and prayers to all those grieving minister dimmesdale. <3 <3',
        },
        {
          author: missyhibbins,
          timestamp: 15,
          likes: 40,
          content:
            'He will be in our hearts always, and may his spirit live in eternal peace in heaven with all those he loved. <3',
        },
        {
          author: arthuwur_dimmy,
          timestamp: 17,
          likes: 29,
          content: 'such a tragedy, he left us too soon. <3',
        },
      ],
    },
  ],
}

export const users: SerializableUser[] = []
export const posts: SerializablePost[] = []
export const follows: SerializableFollow[] = []

const serializeUser = (user: UnserializedUser) => {
  users.push({
    username: user.username,
    displayName: user.displayName,
    bio: user.bio,
    profileImage: user.profileImage,
    bannerImage: user.bannerImage,
    joinDate: user.joinDate.getTime(),
  })

  for (const target of user.follows ?? []) {
    follows.push({ user: user.username, follows: target.username })
  }
}

const serializePost = (post: UnserializedPost, parent?: SerializablePost) => {
  let time: Date

  if (typeof post.timestamp === 'number') {
    if (!parent) {
      throw new Error('Post must have a parent if timestamp is a number')
    }

    const minutes = Math.floor(post.timestamp)
    const seconds = (post.timestamp % 1) * 100

    time = new Date(parent.timestamp + minutes * 60 * 1000 + seconds * 1000)
  } else {
    time = post.timestamp
  }

  const serialized: SerializablePost = {
    parent: parent?.id,
    id: nanoid(),
    author: post.author.username,
    content: post.content,
    media: post.media ?? [],
    likes: post.likes ?? 0,
    timestamp: time.getTime(),
  }

  posts.push(serialized)
  ;(post.comments ?? []).forEach((comment) => serializePost(comment, serialized))
}

data.users.forEach((u) => serializeUser(u))
data.posts.forEach((p) => serializePost(p))
