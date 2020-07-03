import convert from 'xml-js';

const getXMLNodeValue = (node) => {
    return node.elements[0].text;
};

const getMatchedFromList = (list,key,value) => {
    return list.find(elem=>(elem[key]===value));
};

export const getBooksInfoFromXml = (response) => {
    let parsedResponse = JSON.parse(convert.xml2json(response));
    let search = getMatchedFromList(parsedResponse.elements[0].elements,"name","search");
    let searchResults = getMatchedFromList(search.elements,"name","results");
    let books = searchResults.elements && searchResults.elements.map(elem=>{
                    return elem.elements.reduce((dict,info)=>{
                        if(info.name === 'best_book'){
                            info.elements.forEach((subInfo)=>{
                                if(subInfo.name === 'author' && subInfo.elements && subInfo.elements.length > 1){
                                    let authorName;
                                    try{
                                        authorName = getXMLNodeValue(getMatchedFromList(subInfo.elements,"name","name"));
                                    }
                                    finally{
                                        dict[subInfo.name] = authorName;
                                    }                            
                                }
                                else{
                                    dict[subInfo.name] = getXMLNodeValue(subInfo);
                                }
                            });
                        }
                        else if(info.elements){
                            dict[info.name]=getXMLNodeValue(info);
                        }
                        return dict;
                    },{})
                });    
    return {
        books: books || [],
        queryString: getMatchedFromList(search.elements,"name","query").elements[0].cdata,
        resultsStart: parseInt(getXMLNodeValue(getMatchedFromList(search.elements,"name","results-start"))),
        resultsEnd: parseInt(getXMLNodeValue(getMatchedFromList(search.elements,"name","results-end"))),
        totalResults: parseInt(getXMLNodeValue(getMatchedFromList(search.elements,"name","total-results")))
    };

};