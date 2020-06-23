const olaMaria = {
    autor: 'Maria',
    texto: 'Bom dia'
};
const olaJoao = {
    autor: 'Joao',
    texto: 'Bom dia'
};
const olaPaula = {
    autor: 'Paula',
    texto: 'Bom dia'
};
const olaMaria2 = {
    autor: 'Maria',
    texto: 'Bom dia'
};
const olaJose = {
    autor: 'José',
    texto: 'Bom dia'
};
function postsDoAutor(arrayPosts, autor) {
    return arrayPosts.filter(post => {
        return post.autor === autor;
    });
}
console.log(postsDoAutor([olaJoao, olaMaria, olaPaula, olaMaria2], 'Maria'));
//# sourceMappingURL=exercicio4.js.map