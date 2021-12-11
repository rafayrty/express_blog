//js

const ArticleView = (req, res) => {
    res.render("pages/article", {slug:req.params.slug});
}

module.exports =  {
    ArticleView,
};