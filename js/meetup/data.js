const meetups = [
  {
    episode: 15,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2019-12-24',
    start_time: '06:00 pm',
    end_time: '08:00 pm',
    address: 'Gusingal, Lalitpur · Kathmandu',
    hosted_by: {
      name: 'Susan Joshi',
      twitter_username: 'josisusan'
    },
    venue_sponsor: {
      link: 'http://jyaasa.com/',
      logo: 'http://jyaasa.com/img/logo-transparent.png',
      name: 'Jyaasa'
    },
    sessions: [
      {
        id: 1,
        title: 'Performance and Load Testing your Rails app',
        description: null,
        speaker: 'Milap Neupane',
        twitter_username: '_milap',
        github_username: 'milap-neupane',
        designation: 'Rubyist Gohper. Blogger',
        slides_link: 'https://docs.google.com/presentation/d/1WdA95HExrw5E7NFW_swajzC-Ydyi9kahdoCRDbfngH4/edit',
        video_link: 'https://www.facebook.com/RubyNepal.org/videos/830832337357025/',
        demo_link: ''
      },
      {
        id: 2,
        title: 'Socket Programming in Ruby',
        description: null,
        speaker: 'Sushant Bajracharya',
        twitter_username: '',
        github_username: 'sushant12',
        designation: 'Software Developer',
        slides_link: '/assets/meetup_dec_2019_socket_programming_sushant12.pdf',
        video_link: 'https://www.facebook.com/RubyNepal.org/videos/830832337357025/',
        demo_link: ''
      }
    ]
  },
  {
    episode: 14,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2019-09-29',
    start_time: '11:00 am',
    end_time: '02:00 pm',
    address: 'Sainbu, Bhaisepati · Kathmandu',
    hosted_by: {
      name: 'Susan Joshi',
      twitter_username: 'josisusan'
    },
    venue_sponsor: {
      link: 'https://www.cloudfactory.com/',
      logo: 'https://www.cloudfactory.com/hs-fs/hub/351374/file-461075169-png/img/cf-logo-preview.png?t=1528352709359',
      name: 'CloudFactory'
    },
    sessions: [
      {
        id: 1,
        title: 'Build your free personal Developer website with Jekyll',
        description: null,
        speaker: 'Budha Ram Gurung',
        twitter_username: 'coolbrg',
        github_username: 'coolbrg',
        designation: 'CTO, Siris Youth Foundation',
        slides_link: 'https://docs.google.com/presentation/d/1khnzL-VyH0CN_GJaZVSYrq-Dve5Tsbzv9Tsphu41adU/edit?usp=drivesdk',
        video_link: 'https://www.facebook.com/groups/rubydevelopersnepal/permalink/1422589424565691/',
        demo_link: ''
      },
      {
        id: 2,
        title: 'Jekyll Themes and zero-cost Hosting',
        description: null,
        speaker: 'Rajan Bhattarai',
        twitter_username: 'cdrrazan',
        github_username: 'cdrrazan',
        designation: 'Full Stack Ruby on Rails Developer',
        slides_link: 'https://meetup.cdrrazan.com/',
        video_link: 'https://www.facebook.com/groups/rubydevelopersnepal/permalink/1422589424565691/',
        demo_link: ''
      }
    ]
  },
  {
    episode: 13,
    title: 'Casual Meetup',
    date: '2019-06-16',
    start_time: '02:00 pm',
    end_time: '04:00 pm',
    address: 'Pulchowk · Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      name: 'The Village Cafe'
    },
    sessions: [
      {
        id: 1,
        title: 'My Journey',
        description: null,
        speaker: 'Aram Bhusal',
        twitter_username: 'phoenixwizard',
        github_username: 'phoenixwizard',
        designation: 'Principal Engineer, Zoomcar',
        slides_link: '',
        video_link: 'https://www.youtube.com/watch?v=jpequNhq9-A',
        demo_link: ''
      }
    ]
  },
  {
    episode: 12,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2018-05-13',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Sainbu, Bhaisepati · Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://www.cloudfactory.com/',
      logo: 'https://www.cloudfactory.com/hs-fs/hub/351374/file-461075169-png/img/cf-logo-preview.png?t=1528352709359',
      name: 'CloudFactory'
    },
    sessions: [
      {
        id: 1,
        title: 'Parallel Tests with Docker',
        description: null,
        speaker: 'Rohit Joshi',
        twitter_username: 'roxxypoxxy',
        github_username: 'RohitRox',
        designation: 'Senior Software Engineer CloudFactory',
        slides_link: 'https://docs.google.com/presentation/d/15GvuyRnrS7yZ2DmAP9BbhWSiZ85PCMoUXPicz64UaXE/edit#slide=id.gcb9a0b074_1_0',
        video_link: 'https://www.youtube.com/watch?v=vDqrHX2Ozaw',
        demo_link: 'https://github.com/RohitRox/docker-rails-parallel-tests'
      },
      {
        id: 2,
        title: 'Quality Assurance is a Process, not a Department',
        description: null,
        speaker: 'Basanti Neupane',
        twitter_username: 'BasantiNeupane',
        github_username: null,
        designation: 'CloudFactory',
        profile_image_link: 'https://pbs.twimg.com/profile_images/742293936144683008/5QI_EDYd_400x400.jpg',
        slides_link: 'https://docs.google.com/presentation/d/1-jtL7P3rmZz02Y7t1L-s620Zz9bQ7-BZTC1BwNIkINE/edit#slide=id.g387f5142bf_2_10',
        video_link: 'https://www.youtube.com/watch?v=dqWHRrVbgyM',
        demo_link: null
      },
      {
        id: 3,
        title: 'Learning from a postmortem as a developer',
        description: null,
        speaker: 'Pratik Ghimire',
        twitter_username: null,
        github_username: 'pratikghimire',
        designation: 'Software Engineer',
        slides_link: 'https://docs.google.com/presentation/d/1jD789KFA7_yyFRZSMyQSIZLtVVNp3mukSLwlqyxziOU/edit?copiedFromTrash#slide=id.p3',
        video_link: 'https://www.youtube.com/watch?v=3_4nNad9-3U',
        demo_link: null
      },
      {
        id: 4,
        title: 'Integrating Braintree and Rails',
        description: null,
        speaker: 'Prativa Pokhrel',
        twitter_username: 'prativa_p2',
        github_username: 'prativapokhrel',
        designation: 'Ruby on Rails and React Native Developer',
        slides_link: 'https://docs.google.com/presentation/d/1iLAiAJ_1zFKx6rLTuhC2OEJI8lnqYYmrx7PnaW4Thvg/edit#slide=id.g38da470963_0_268',
        video_link: 'https://www.youtube.com/watch?v=TJ0pgnoOh-U',
        demo_link: null
      }
    ]
  },
  {
    episode: 11,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2018-04-08',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Balkumari Lalitpur',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://ncit.edu.np',
      logo: 'https://ncit.edu.np/assets/img/logo.png',
      name: 'NCIT College'
    },
    sessions: [
      {
        id: 1,
        title: 'History of RubyNepal',
        description: null,
        speaker: 'Saroj Maharjan',
        twitter_username: 'zoraslapen',
        github_username: 'zoras',
        designation: 'Organiser and Admin, RubyNepal.org',
        slides_link: null,
        video_link: 'https://www.youtube.com/watch?v=p6nTzC9zcr0',
        demo_link: null
      },
      {
        id: 2,
        title: 'Single Page Application with Vue.js and Rails',
        description: null,
        speaker: 'Rabin Gaire',
        twitter_username: 'rabingaire',
        github_username: 'rabingaire',
        designation: 'Web Developer',
        slides_link: 'https://www.slideshare.net/RabinGaire/vuerails',
        video_link: 'https://www.youtube.com/watch?v=NgS3aND7-U4',
        demo_link: null
      },
      {
        id: 3,
        title: 'Introducing Elasticsearch in Rails using Searchkick gem',
        description: null,
        speaker: 'Bibek Khadka',
        twitter_username: 'bbk_khadka',
        github_username: 'roringbbk',
        designation: 'Software Engineer',
        slides_link: 'https://docs.google.com/presentation/d/1jemvcT3aBE6qBr_iT1oL5vSeZD8U3jF6eH50H6ON3Zk/edit',
        video_link: 'https://www.youtube.com/watch?v=YQm3aoldrLE',
        demo_link: null
      },
      {
        id: 4,
        title: 'A common code between web and mobile',
        description: null,
        speaker: 'Suyog KC',
        twitter_username: 'suyogkrazz',
        github_username: 'suyogkrazz',
        designation: 'Ruby on Rails and React Native Developer',
        slides_link: 'https://docs.google.com/presentation/d/1iFPXsbW2-aZGwqnC_2RDhYHQBRjVVQTdu72if7QLEDY/edit',
        video_link: 'https://www.youtube.com/watch?time_continue=7&v=eVQQ2AAzp0Y',
        demo_link: 'https://github.com/suyogkrazz/railsreacttalk'
      }
    ]
  },
  {
    episode: 10,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2018-01-14',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Baluwatar Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://codysseynepal.com/',
      logo: 'https://codysseynepal.com/images/codyssey-logo-no-web.png',
      name: 'Codyssey Web Nepal'
    },
    sessions: [
      {
        id: 1,
        title: 'Kafka with Rails',
        description: null,
        speaker: 'Sujit Shakya',
        twitter_username: 'blackrabbitt26',
        github_username: 'BlackRabbitt',
        designation: 'reelancer@beetle-developers',
        slides_link: 'https://docs.google.com/presentation/d/1f2ju1U9_BpuUtQxa3RLCP9U0dJS6lUjN2Zn1nKGNDjc/edit#slide=id.p',
        video_link: 'https://www.youtube.com/watch?v=wKZVnd4EeAs',
        demo_link: null
      },
      {
        id: 2,
        title: 'Docker and Docker Compose for Developers',
        description: null,
        speaker: 'Milan Thapa',
        twitter_username: 'thapakazi_',
        github_username: 'thapakazi',
        designation: 'Docker fan, found it on hacker news',
        slides_link: 'https://rawgit.com/thapakazi/slides/master/docker/docker_and_docker_compose_for_devs.html',
        video_link: 'https://www.youtube.com/watch?v=eshZI2ujK3I',
        demo_link: null
      }
    ]
  },
  {
    episode: 9,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2017-09-10',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Sainbu, Bhaisepati · Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://www.cloudfactory.com/',
      logo: 'https://www.cloudfactory.com/hs-fs/hub/351374/file-461075169-png/img/cf-logo-preview.png?t=1528352709359',
      name: 'CloudFactory'
    },
    sessions: [
      {
        id: 1,
        title: 'Secrets behind writing specs',
        description: null,
        speaker: 'Er. Chandra Mohan Thakur',
        twitter_username: 'cmthakur1986',
        github_username: 'cmthakur',
        designation: 'Sr. SoftwareEngineer @CloudFactory',
        slides_link: 'https://www.slideshare.net/ErChandraMohanThakur/secrets-behind-writing-specs/1',
        video_link: 'https://www.youtube.com/watch?v=ZUFtLuvxHE4',
        demo_link: null
      },
      {
        id: 2,
        title: 'Lightweight apps with Sinatra',
        description: null,
        speaker: 'Aadesh Shrestha',
        twitter_username: 'aadeshere1',
        github_username: 'aadeshere1',
        designation: 'Ruby on Rails developer.  Techrise',
        slides_link: 'https://docs.google.com/presentation/d/1IDHtzAB3tMowoMpm2drWHIICxoQ22jpGxZUREfEukZk/edit#slide=id.p',
        video_link: 'https://www.youtube.com/watch?v=_J6io3sUfLc',
        demo_link: null
      }
    ],
    questions_answers: [
      {
        name: 'Saroj Maharjan',
        twitter_username: 'zorasplan'
      },
      {
        name: 'kapil Raj Nakhwa',
        twitter_username: 'xecutioner303'
      }
    ]
  },
  {
    episode: 8,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2016-07-17',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://www.facebook.com/IHKathmandu',
      logo: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/55788325_1495016847296339_1352846296590843904_n.jpg',
      name: 'Innovation Hub, FNCCI provided by @AmericanSpaces'
    },
    sessions: [
      {
        id: 1,
        title: 'New Features in Rails 5',
        description: null,
        speaker: 'Saroj Maharjan',
        twitter_username: 'zoraslapen',
        github_username: 'zoras',
        designation: 'Mentor @GSoC. #RoR Developer. Consultant. Traveler. Founder',
        slides_link: null,
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'Ruby Implementations(MRI, Rubinius, and JRuby)',
        description: null,
        speaker: 'Uzzal Devkota',
        twitter_username: 'oozzal',
        github_username: 'oozzal',
        designation: '#Developer #Ruby #Rails #Javascript #JavaSoftware Engineer',
        slides_link: null,
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 7,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2016-05-08',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://www.facebook.com/IHKathmandu',
      logo: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/55788325_1495016847296339_1352846296590843904_n.jpg',
      name: 'Innovation Hub, FNCCI provided by @AmericanSpaces'
    },
    sessions: [
      {
        id: 1,
        title: 'ActionCable in Rails 5',
        description: null,
        speaker: 'Paul Chobert',
        twitter_username: 'barodeur',
        github_username: 'barodeur',
        designation: 'Freelance Software Engineer',
        slides_link: 'https://drive.google.com/file/d/170mmguu5QUppftCTBrxW4D5QtNqWzIpG/view',
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'Building APIs in RoR with Grape',
        description: null,
        speaker: 'Milap Neupane',
        twitter_username: '_milap',
        github_username: 'milap-neupane',
        designation: 'Software Engineer',
        slides_link: 'https://drive.google.com/file/d/1b0P7JIOxJTks3t0HOKKh73kp7YH8i4lD/view',
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 6,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2016-03-20',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'http://www.leapfrog.academy/',
      logo: 'http://www.leapfrog.academy/themes/website/assets/img/logo_main.png',
      name: 'Leapfrog Academy'
    },
    sessions: [
      {
        id: 1,
        title: 'Working as a Junior Developer',
        description: null,
        speaker: 'Madhuri Shrestha',
        twitter_username: 'MadzzSrestha',
        github_username: 'MadhuriShres',
        designation: 'Fun-loving Adventurous Free-spirited Determined',
        slides_link: null,
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'Organizing CSS',
        description: null,
        speaker: 'Sanjeev Praja',
        twitter_username: 'SanjeevPraja',
        github_username: 'SanjeevPraja',
        designation: null,
        slides_link: null,
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 5,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2016-01-10',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Sainbu, Bhaisepati · Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://www.cloudfactory.com/',
      logo: 'https://www.cloudfactory.com/hs-fs/hub/351374/file-461075169-png/img/cf-logo-preview.png?t=1528352709359',
      name: 'CloudFactory'
    },
    sessions: [
      {
        id: 1,
        title: 'Performance Improvement of Rails Application',
        description: null,
        speaker: 'Sadiksha Gautam',
        twitter_username: 'sadikshagautam',
        github_username: 'sadiksha',
        designation: 'Software Developer at EnerNOC, Munich, Germany',
        slides_link: 'https://files.meetup.com/18762323/Performance_Improvement_Sadiksha_Gautam-Ruby_Nepal_Meetup-Jan_10.pdf',
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'Scaling CI with Docker @ CloudFactory',
        description: null,
        speaker: 'Bikash Kaji Basukala',
        twitter_username: 'kajisaap',
        github_username: 'kajisaap',
        designation: 'Devops, janitor and the man maid',
        slides_link: 'https://docs.google.com/presentation/d/1IyQmKLfdgP9Ktqzg9ApaFKlurGLSJHGVRwtn43qCmQk/pub?start=false&loop=false&delayms=3000#slide=id.p4',
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 4,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2015-12-20',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://twitter.com/AmericanSpaces',
      logo: 'https://pbs.twimg.com/profile_images/438007102317928448/Qyx3zvt8_400x400.jpeg',
      name: 'American Spaces'
    },
    sessions: [
      {
        id: 1,
        title: 'Tech in France and meeting developers in Asia',
        description: null,
        speaker: 'Ludwine Probst',
        twitter_username: 'nivdul',
        github_username: 'nivdul',
        designation: '',
        slides_link: null,
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'Test Driven Development',
        description: null,
        speaker: 'Ganesh Kunwar',
        twitter_username: 'gkunwar1',
        github_username: 'gkunwar',
        designation: 'Software Engineer',
        slides_link: 'https://drive.google.com/file/d/1DHB_FrWsofyOHT8dd38f8ZB-3DVr8aoK/view',
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 3,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2015-09-13',
    start_time: '11:00 am',
    end_time: '2:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://twitter.com/AmericanSpaces',
      logo: 'https://pbs.twimg.com/profile_images/438007102317928448/Qyx3zvt8_400x400.jpeg',
      name: 'American Spaces'
    },
    sessions: [
      {
        id: 1,
        title: 'Asset Management in Rails',
        description: null,
        speaker: 'Susan Joshi',
        twitter_username: 'josisusan',
        github_username: 'josisusan',
        designation: 'Ruby & Javascript',
        slides_link: 'https://secure.meetup.com/login/?returnUri=https%3A%2F%2Ffiles.meetup.com%2F18762323%2F%2F%2FAsset%20Management%20in%20Rails%20-%20Ruby%20Nepal%20Meetup%20-%20Sep%2013%2C%202015.pdf',
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'MetaProgramming in Ruby',
        description: null,
        speaker: 'Prasvin Pandey',
        twitter_username: 'prasvinp',
        github_username: 'prasvin',
        designation: '',
        slides_link: 'https://secure.meetup.com/login/?returnUri=https%3A%2F%2Ffiles.meetup.com%2F18762323%2F%2F%2FMetaProgramming%20in%20Ruby%20-%20Ruby%20Nepal%20Meetup%20-%20Sep%2013%2C%202015.zip',
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 2,
    title: 'RoR Himalayan Meetup at Kathmandu',
    date: '2015-08-09',
    start_time: '01:30 pm',
    end_time: '05:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://twitter.com/AmericanSpaces',
      logo: 'https://pbs.twimg.com/profile_images/438007102317928448/Qyx3zvt8_400x400.jpeg',
      name: 'American Spaces'
    },
    sessions: [
      {
        id: 1,
        title: 'Opening note',
        description: null,
        speaker: 'Saroj Maharjan',
        twitter_username: 'zoraslapen',
        github_username: 'zoras',
        designation: 'Organiser and Admin, RubyNepal.org',
        slides_link: 'https://speakerdeck.com/zoras/ruby-and-rails-meetup-nepal',
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'ECMAScript 2015',
        description: null,
        speaker: 'Madhu Rakhal Magar',
        twitter_username: 'madhurakhal',
        github_username: 'madhurakhal',
        designation: 'Software Engineer',
        slides_link: 'http://slides.com/rakhalmadhu/ecmascript2015-es6#/',
        video_link: null,
        demo_link: null
      },
      {
        id: 2,
        title: 'Front End Development for Ruby Developers',
        description: null,
        speaker: 'Nikesh Suwal',
        twitter_username: 'SuwalNikesh',
        github_username: 'Nikeshsuwal',
        designation: 'Software Engineer @ Jyaasa Technologies',
        slides_link: 'https://docs.google.com/presentation/d/1n48hyKqUNe7e5bwGe5HKYw1bavEM44qnr7G8M1v8M-0/edit#slide=id.p',
        video_link: null,
        demo_link: null
      }
    ]
  },
  {
    episode: 1,
    title: 'Monthly Dev Meetup',
    date: '2014-07-26',
    start_time: '02:00 pm',
    end_time: '05:00 pm',
    address: 'Kathmandu',
    hosted_by: {
      name: 'Saroj Maharjan',
      twitter_username: 'zoraslapen'
    },
    venue_sponsor: {
      link: 'https://www.cloudfactory.com/',
      logo: 'https://www.cloudfactory.com/hs-fs/hub/351374/file-461075169-png/img/cf-logo-preview.png?t=1528352709359',
      name: 'CloudFactory'
    },
    sessions: [
      {
        id: 1,
        title: '10 Ways We Can Be Better',
        description: null,
        speaker: 'Mark Sears',
        twitter_username: 'marktsears',
        github_username: null,
        designation: 'Founder and CEO of CloudFactory',
        slides_link: 'https://docs.google.com/presentation/d/1PzVQM4wZb0hiBRAvek6-nO4ptC2yeSR-3ryaWufeAEY/edit#slide=id.p',
        video_link: 'https://www.youtube.com/watch?v=COBCnZls5rE',
        demo_link: null
      },
      {
        id: 2,
        title: 'Ansible',
        description: null,
        speaker: 'Bikash Kaji Basukala',
        twitter_username: 'kajisaap',
        github_username: 'kajisaap',
        designation: 'Devops, janitor and the man maid',
        slides_link: 'https://docs.google.com/presentation/d/1HKycISvdw7lxleJjJKYBh-f8GRhVdC5BsC3Db5wQWkk/present?slide=id.g2ae7d0021_2_7',
        video_link: 'https://www.youtube.com/watch?v=ZKoSG8bxw0A',
        demo_link: null
      },
      {
        id: 3,
        title: 'Ember.js with Ember-Cli',
        description: null,
        speaker: 'Sachin Sagar Rai',
        twitter_username: 'millisami',
        github_username: 'millisami',
        designation: 'Ruby on Rails/Javascript Developer',
        slides_link: null,
        video_link: null,
        demo_link: null
      }
    ]
  }
];

export default meetups;
