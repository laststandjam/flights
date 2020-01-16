const Flight = require('../models/flight')
const Ticket = require('../models/ticket')


const newFlight= (req, res) =>{
    res.render('flights/new')
}

const create= (req, res) =>{
    for(let key in req.body){
        if (req.body[key]==='') delete req.body[key]
    }
    const flight= new Flight(req.body)
    flight.save(err =>{
        if(err) {
            return res.redirect('/flights/new')
        }
        else res.redirect('/flights')
        //console.log(err)
    })
    console.log(req.body)
} 


const index= (req, res) =>{
    Flight.find({}, (err,flights)=>{
        if(err){
            return res.redirect('/flights/new')
        } 
        else{
            res.render('flights/index',{
                flights
            });
            return console.log(flights)
        }
    })
}

const show = (req, res) => {
    Flight.findById(req.params.id) 
    .populate('ticket')
    .exec((err,flight)=> {
    Ticket.find({}, (err, tickets) => {
      res.render('flights/show', { 
        title: 'Ticket Detail',
        flight,
        tickets,
      });
    });
  })
}


module.exports = {
    new: newFlight,
    create,
    show,
    index
}