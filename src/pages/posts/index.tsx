import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Desenvolvimento de Jogos Digitais: do storytelling à programação</strong>
            <p>Os jogos digitais já estão presentes no nosso dia a dia e muitas vezes não percebemos o quanto. A Pesquisa Game Brasil 2021 mostra que aproximadamente 72% dos brasileiros jogam games. São os filhos que passam horas jogando on-line, ou somos nós mesmos que usamos nosso tempo livre para se entreter em jogos nos nossos smartphones, até mesmo em propagandas e anúncios eles estão lá, capturando nossa atenção.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Desenvolvimento de Jogos Digitais: do storytelling à programação</strong>
            <p>Os jogos digitais já estão presentes no nosso dia a dia e muitas vezes não percebemos o quanto. A Pesquisa Game Brasil 2021 mostra que aproximadamente 72% dos brasileiros jogam games. São os filhos que passam horas jogando on-line, ou somos nós mesmos que usamos nosso tempo livre para se entreter em jogos nos nossos smartphones, até mesmo em propagandas e anúncios eles estão lá, capturando nossa atenção.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Desenvolvimento de Jogos Digitais: do storytelling à programação</strong>
            <p>Os jogos digitais já estão presentes no nosso dia a dia e muitas vezes não percebemos o quanto. A Pesquisa Game Brasil 2021 mostra que aproximadamente 72% dos brasileiros jogam games. São os filhos que passam horas jogando on-line, ou somos nós mesmos que usamos nosso tempo livre para se entreter em jogos nos nossos smartphones, até mesmo em propagandas e anúncios eles estão lá, capturando nossa atenção.</p>
          </a>
        </div>
      </main>
    </>
  );
}