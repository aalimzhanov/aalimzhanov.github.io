const loadAboutMe = () => {
    const content = `
        <div class="content" id="about-me">
            <div id="introduction">
                <img src="../pics/myPicture.jpg" alt="My pretty face" id="myPicture">
                <h1>Hi, I'm Adil!</h1>
                <p id="elevator-pitch">My name is Adil Alimzhanov. I was born in Kazakhstan and lived there until the age of 18. On January 15th, 2021, I packed my suitcase, said goodbye to my family and friends, and moved to Canada. Three years later, I am studying at one of the top undergraduate universities in Canada, majoring in Computer Science and minoring in Maths. Was I expecting all of this when I boarded that plane? Probably not... Am I happy with where I am in life right now? Heck yeah!</p>
            </div>
        </div>
    `;
    document.querySelector('.content-wrapper').innerHTML = content;
}

export default loadAboutMe;