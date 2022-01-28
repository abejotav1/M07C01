const db = require('../../database/models');
const Op = db.Sequelize.Op;

const moviesController={
    list:(req,res)=>{
        db.Movie
        .findAll()
        .then(movies=>{
            return res.status(200).json({
                total:movies.length,
                data:movies,
                status:200
            })
        })
    },
    detail:(req,res)=>{
        db.Movie
        .findByPk(req.params.id)
        .then(movie=>{
            return res.status(200).json({
                data:movie,
                status:200
            })
        })
    },
    create:(req,res)=>{
        db.Movie
        .create({
            title:req.body.title,
            rating:req.body.rating,
            awards:req.body.awards,
            release_date:req.body.release_date,
            length:req.body.length,
            genre_id:req.body.genre_id
        })
        .then(movie=>{
            return res.status(200).json({
                data:movie,
                status:200,
                created:'ok'
            })
        })
    },
    delete:(req,res)=>{
        db.movie
        .destroy({
            where:{
                id:req.params.id
            }
        })
        .then(response=>{
            return res.json(response)
        })
    },
    search:(req,res)=>{
        db.movie
        .findAll({
            where:{
                title:{[Op.like]:'%'+req.query.keyword+'%'}
            }
        })
        .then(movies=>{
            return res.status(200).json(movies);
        })
    }
}

module.exports = moviesController