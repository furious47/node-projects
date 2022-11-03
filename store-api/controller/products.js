const data = require('../models/data')

const getProducts = async (req,res)=>{
    
    
}

const getSpecificProducts = async (req,res)=>{
    const {featured,name,sort,numericFilter} = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (name){
        queryObject.name = {$regex:name, $options : 'i'}
    }
    if(numericFilter){
        const exp = {'>':'$gt','>=':'$gte','=':'$eq','<':'$lt','<=':'$lte'};
        const regex = /\b(>|>=|<|<=)\b/g;
        let filter = numericFilter.replace(regex,(match)=> `-${exp[match]}-`)
        console.log(filter);
        const values = ['price','rating'];
        filter = filter.split(',').forEach((item)=>{
            const [type,operator,value] = item.split('-');
            console.log([type,operator,value])
            if(values.includes(type)){
            queryObject[type] = {[operator]:Number(value)};
            }
        })
    }
    


    console.log(queryObject);

    let result = data.find(queryObject) 
    if (sort) {
        const sortList = sort.split(',').join(' ');
        console.log(sortList);
        result = result.sort(sortList)
    }else{
        result = result.sort(createdat)

    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page -1)*limit;

    result = result.skip(skip).limit(limit);
    
    const datas = await result

    res.status(200).json({datas, nbHits: datas.length})
}

module.exports = {
    getProducts,
    getSpecificProducts
}