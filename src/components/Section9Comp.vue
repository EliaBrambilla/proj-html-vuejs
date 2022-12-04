<template>
    <div class="whiteBg">
        <div class="section9">
            <div class="sec9Booking">
                <!-- select person -->
                <select name="person" id="person">
                    <option value="1person">1person</option>
                    <option value="2person">2person</option>
                    <option value="3person">3person</option>
                </select>
                <!-- input date -->
                <input type="date" id="booking-day" name="booking-day" value="" min="2022-01-01" max="2022-12-31">
                <!-- input time -->
                <input type="time" id="booking-hour" name="booking-hou" value="" min="09:00" max="18:00" required>
                <!--  -->
                <button>booking table</button>
    
            </div>
            <div class="sec9ResultBooking">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section9Comp',
    components: {
    },
    props: {
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.whiteBg{
    background-color: white;
}
.section9 {
    margin: 10px 0px;
    padding: 100px;
    background-image: url('../assets/img/h3-background-img-3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .sec9Booking {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>