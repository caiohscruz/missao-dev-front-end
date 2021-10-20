<template>
  <div class="coursecard">
    <div>
      <img src="../assets/image-chess.png" />
    </div>
    <div>
      <h3>Investimento para iniciantes</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
      <button class="enter-course">começar agora</button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .coursecard {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .coursecard div {
    margin: auto;
  }

  .coursecard img {
    width: 38rem;
    height: auto;
    margin-bottom: 3rem;
  }

  .coursecard div:nth-child(2) {
    width: 72.4rem;
  }

  h3 {
    font-weight: 700;
    color: var(--secondary);
    font-size: 3.5rem;
    margin-bottom: 3.7rem;
  }

  .enter-course {
    background-color: var(--primary);
    color: var(--overlay);
    font-size: 2rem;
    border-radius: 6.2rem;
    width: 23.3rem;
    height: 5.1rem;
    margin-top: 6.6rem;
  }
</style>