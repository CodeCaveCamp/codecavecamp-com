import moment from 'moment';

export default [{
    id: '1',
    title: 'Jumpstart',
    description: 'Entry level CSS & HTML',
    duration: '18 hours',
    level: 'beginner',
    createdAt: 0
},
{
    id: '2',
    title: 'RAMP',
    description: 'HTML, CSS and JavaScript',
    duration: '6 weeks',
    level: 'intermediate',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}];