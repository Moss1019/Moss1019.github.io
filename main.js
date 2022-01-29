const mainPage = `
<div class="padded-content main-page">
                <div class="main-content">
                    <ul class="cloud">
                        <li><a data-weight="6">Welkom</a></li>
                        <li><a data-weight="9">Welcome</a></li>
                        <li><a data-weight="8">Velkommen</a></li>
                        <li><a data-weight="2">Приве́тствуем</a></li>
                        <li><a data-weight="6">Tervetuloa</a></li>
                        <li><a data-weight="4">Witam</a></li>
                        <li><a data-weight="7">Bine ai venit</a></li>
                        <li><a data-weight="4">Willkommen</a></li>
                        <li><a data-weight="4">Welkom</a></li>
                        <li><a data-weight="2">Velkommen</a></li>
                        <li><a data-weight="6">Witam</a></li>
                        <li><a data-weight="8">Bine ai venit</a></li>
                        <li><a data-weight="7">Приве́тствуем</a></li>
                        <li><a data-weight="1">Willkommen</a></li>
                        <li><a data-weight="5">Welcome</a></li>
                        <li><a data-weight="2">Bine ai venit</a></li>
                        <li><a data-weight="3">Tervetuloa</a></li>
                    </ul>
                </div>
            </div>
`

function loadMain() {
    const contentBlock = document.getElementById('content');
    contentBlock.innerHTML = mainPage;
}
