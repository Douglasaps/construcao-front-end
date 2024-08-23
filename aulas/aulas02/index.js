const root = document.getElementById("root");

/* componentes */
function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Conteudo() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer");
    return footer;
}

function Imagem(origem, texto) {
    const img = document.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;
}

function Titulo(texto) {
    const h1 = document.createElement("h1");
    h1.innerText = texto;
    return h1;
}

function Input(id, tipo, rotulo) {
   const label = document.createElement("label");
   label.innerText = rotulo;
   label.setAttribute("for", id);
   const input = document.createElement("input");
   input.setAttribute("id", id);
   input.setAttribute("name", id);
   input.setAttribute("type", tipo);
   const grupo = document.createElement("div");
   grupo.append(label, input);
   return grupo;
}

function Botao(texto) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", texto);
    return button;
}

function Link(texto, rota) {
   const a = document.createElement("a");
   a.setAttribute("href", rota);
   a.innerText = texto;
   return a;
}

/* paginas */
function PageLogin() {
    const logo = Imagem("arquivo.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const email = Input("email", "email", "E-mail");
    const senha = Input("senha", "password", "Senha");
    const entrar = Botao("Entrar");
    const link = Link("Esqueceu a Senha?", "/esqueceu-senha");
    const conteudo = Conteudo();
    conteudo.append(logo, titulo, email, senha, entrar, link);
    const rodape = Rodape();
    root.append(conteudo, rodape);
}

function PageHome() {
    const cabecalho = Cabecalho();
    const conteudo = Conteudo();
    root.append(cabecalho, conteudo);
}

PageLogin();