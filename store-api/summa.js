const data = require('./models/data')


const specific = (req,res)=>{
    const {nf} = req.query;
    if(nf){
        const ope = {
            '>' : '$gt',
            '=' : '$eq',
            '>=' : '$gte',
            '<' : '$gt',
            '<=' : '$gte',
        }

        const regex = /\b(>|=|>=|<|<=)\b/g;
        const filter = nf.replace(regex,(match)=> `-${ope[match]}-`)
        filter = filter.split(',').foreach((item)=>{
            const values = ['price','rating']
            let [input,operator,value] = item.split('-');
            if(values.includes(input)){
                queryObject[input] = {[operator]: Number(value)}
            }
        })

    }
}