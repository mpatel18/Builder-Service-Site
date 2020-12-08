<template>
    <div class="nav-container">
        <header>logo</header>
        <nav class="navbar">
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">service</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 7em 15em;

        header { 
            color: #E8D5B5; 
            font-size: 45px;
            font-family: 'Nunito', sans-serif;
            cursor: pointer;
        }

        ul { 
            display: flex;
            justify-content: space-evenly;

            li {
                list-style-type: none;
            }

            a { 
                display: block;
                padding: 0 1em; 
                color: #FCF7FF;
                font-size: 30px;
                font-family: 'Nunito', sans-serif;
                text-decoration: none;
            }
        }
    }
</style>