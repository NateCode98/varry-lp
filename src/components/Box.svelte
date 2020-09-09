<script>
export let imageUrl;
export let quote;
export let name; 
export let title;
</script>


<style>
.box {
}
.img {
    text-align: center;
    margin: 10px auto;
}

.lead {
    font-size: 1rem;
    line-height: 1.5;
    opacity: .8;
    color: var(--text-blue);
}

.lead span{
    color: var(--text-red);
}

.quote {

    margin-bottom: 3vmax;
}

h1 {
    font-family: 'Open Sans';
    font-weight: normal;
    margin-bottom: 5px;
    color: var(--text-blue);
    font-weight: 1.2rem;
}
</style>


<div class="box">
    <div class="img">
        <img src={imageUrl} alt="">
    </div>
    <p class="lead quote">
        {quote}
    </p>
    <div class="details">
        <h1>{name}</h1>
        <p class="lead">{title}</p>
    </div>
</div>
