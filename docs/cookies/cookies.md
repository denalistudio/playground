# cookies

    <div id="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h1>Manage cookie preferences</h1>
            <section class="analytics">
                <h2>Analytics</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati id saepe officia,
                    consequatur voluptas! Alias expedita aliquid, distinctio magnam illum itaque quia officia minus
                    molestiae tempora, reiciendis ea doloribus?</p>
                <form>
                    <input type="radio" id="analytics-accept" value="Accept">
                    <label for="analytics-accept">Accept</label>
                    <input type="radio" id="analytics-reject" value="Reject">
                    <label for="analytics-reject">Reject</label>
                </form>
            </section>
            <section class="social-media">
                <h2>Social media</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati id saepe officia,
                    consequatur voluptas! Alias expedita aliquid, distinctio magnam illum itaque quia officia minus
                    molestiae tempora, reiciendis ea doloribus?</p>
                <form>
                    <input type="radio" id="social-media-accept" value="Accept">
                    <label for="social-media-accept">Accept</label>
                    <input type="radio" id="social-media-reject" value="Reject">
                    <label for="social-media-reject">Reject</label>
                </form>
            </section>
            <section class="advertising">
                <h2>Advertising</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati id saepe officia,
                    consequatur voluptas! Alias expedita aliquid, distinctio magnam illum itaque quia officia minus
                    molestiae tempora, reiciendis ea doloribus?</p>
                <form>
                    <input type="radio" id="advertising-accept" value="Accept">
                    <label for="advertising-accept">Accept</label>
                    <input type="radio" id="advertising-reject" value="Reject">
                    <label for="advertising-reject">Reject</label>
                </form>
            </section>
        </div>
    </div>

    var modal = document.getElementById('modal');
var manageCookies = document.getElementById('manage-cookies')
var closeButton = document.getElementsByClassName('close')[0];

manageCookies.onclick = function() {
    modal.style.display = 'flex';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
}