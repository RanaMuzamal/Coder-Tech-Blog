// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default function handler(req, res) {
    fs.readdir(`blogData/${req.query.slug}.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(200).json({ error: 'Searched blog not found' })
        }
        console.log(req.query.slug)
        res.status(200).json({ name: 'Muzamal' })
    })
    
  }
  