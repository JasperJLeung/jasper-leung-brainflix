import videoList0 from '../assets/Images/video-list-0.jpg';
import videoList1 from '../assets/Images/video-list-1.jpg';
import videoList2 from '../assets/Images/video-list-2.jpg';
import videoList3 from '../assets/Images/video-list-3.jpg';
import videoList4 from '../assets/Images/video-list-4.jpg';
import videoList5 from '../assets/Images/video-list-5.jpg';
import videoList6 from '../assets/Images/video-list-6.jpg';
import videoList7 from '../assets/Images/video-list-7.jpg';
import videoList8 from '../assets/Images/video-list-8.jpg';
import videoFile from '../assets/Video/BrainStationSampleVideo.mp4';

// Side Video Object
const sideVideo = [
    {id: '0', 
    title: 'BMX Rampage: 2018 Highlights', 
    channel: 'Red Cow', 
    image: videoList0
},{
    id: '1', 
    title: 'Become A Travel Pro In One Easy Lesson...', 
    channel: 'Scotty Cranmer', 
    image: videoList1 
},{
    id: '2', 
    title: 'Les Houches The Hidden Gem Of The...', 
    channel: 'Scotty Cranmer', 
    image: videoList2
},{

    id: '3', 
    title: 'Travel Health Useful Medical Information...', 
    channel: 'Scotty Cranmer', 
    image: videoList3
},{
    id: '4', 
    title: 'Cheap Airline Tickets Great Ways To Save', 
    channel: 'Emily Harper', 
    image: videoList4
},{
    id: '5', 
    title: 'Take A Romantic Break In A Boutique Hotel', 
    channel: 'Ethan Owen', 
    image: videoList5
},{
    id: '6', 
    title: 'Choose The Perfect Accommodations', 
    channel: 'Lydia Perez', 
    image: videoList6
},{
    id: '7', 
    title: 'Cruising Destination Ideas', 
    channel: 'Timothy Austin', 
    image: videoList7
},{
    id: '8', 
    title: 'Train Travel On Track For Safety', 
    channel: 'Scotty Cranmer', 
    image: videoList8
}];

//Main Video Object
const mainVideo = {
    id: '0',
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: videoList0,
    views: '1,001,023',
    likes: '110,985',
    duration: '0:42',
    video: videoFile,
    timestamp: '0:00',
    comments: [
        {
          id: 0,
          name: "Micheal Lyons",
          date: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          id: 1,
          name: "Gary Wong",
          date: "12/12/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          id: 2,
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
        },
      ],
  
};


export { sideVideo , mainVideo};