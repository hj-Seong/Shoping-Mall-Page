Vue.component('product-display', {
    data : function() {
        return {
            brand : 'LG',
            product : '마스크',
            pay : 15000,
            // 상세 설명
            details : [
                '폴리프로필렌 부직포',
                '플라스틱(코편)', 
                '나일론끈'
            ],
            // 상품의 종류 - 배열안에 색, 이미지, 재고 
            variants : [
                {color : 'white', image :"./images/mask_white.jpg" , stock :10},
                {color : 'black', image :"./images/mask_black.jpg", stock : 0}
            ]
        }
    },
    computed : {
        title : function() {
            return this.brand+" "+this.product;
        },
        image : function() {
            //배열의 이미지값을 들고오기위함
            return this.variants[1].image
        },
        isStock : function() {
            //배열의 재고의 값을 들고오기위함
            return this.variants[1].stock
        }
    },
    template : `
    <div class="product-display">
        <div class="product-container">
            <!-- 이미지 추가-->
            <div class="product-image">
                <img v-bind:src="image">
            </div>

            <!-- 상품설명 -->
            <div class="product-info">
                <h1> {{title}} </h1>
                <p v-if="isStock"> 재고가 남아있습니다 </p>
                <p v-else> 재고가 없습니다 </p>

                <p>금액 : {{pay}}</p>

                <!-- 상품 세부설명 -->
                <ul>
                    <!-- 배열로 들고와서 출력 -->
                    <li v-for="detail in details "> {{detail}} </li>
                </ul>

                <!-- 색상 바꾸기 -->
                <div class="color-circle"></div>

                <!-- 버튼 -->
                <button class="button">장바구니에 추가</button>
            </div>
        </div>
    </div>
    `
})