
    // Content data for different sections
    const contentData = {
        events: `
<div class='event-list'>
  
<div class='event-card'>
    <div class='event-header'>
        <span>Premier League</span>
    </div>
    <div class='event-content'>
        <div class='match-info'>
            <div class='team__home'>
                <img alt='Team Home' class='team__logo' src='https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png'/>
                <span class='team__name'>Chelsea</span>
            </div>
            <div class='match-time'>
                <div class='match-datetime' data-target-date='2024-12-04'>
                    <!-- Tanggal akan diperbarui oleh script -->
                    04 Desember 2024
                </div>
                <div class='match-hour' data-target-time='15:00'>
                    <!-- Jam akan diperbarui oleh script -->
                    15:00
                </div>
                <div class='countdown'>
                    <!-- Countdown akan diperbarui oleh script -->
                    Loading...
                </div>
            </div>
            <div class='team__away'>
                <img alt='Team Away' class='team__logo' src='https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png'/>
                <span class='team__name'>Barcelona</span>
            </div>
        </div>
    </div>
    <div class='button-group'>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN1")'>CH1</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN2")'>CH2</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN3")'>CH3</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=USANETWORK")'>CH4</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=NBC")'>HC4</button>
    </div>
</div>

<div class='event-card'>
    <div class='event-header'>
        <span>Premier League</span>
    </div>
    <div class='event-content'>
        <div class='match-info'>
            <div class='team__home'>
                <img alt='Team Home' class='team__logo' src='https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png'/>
                <span class='team__name'>Real Madrid</span>
            </div>
            <div class='match-time'>
                <div class='match-datetime' data-target-date='2024-12-04'>
                    <!-- Tanggal akan diperbarui oleh script -->
                    04 Desember 2024
                </div>
                <div class='match-hour' data-target-time='15:00'>
                    <!-- Jam akan diperbarui oleh script -->
                    15:00
                </div>
                <div class='countdown'>
                    <!-- Countdown akan diperbarui oleh script -->
                    Loading...
                </div>
            </div>
            <div class='team__away'>
                <img alt='Team Away' class='team__logo' src='https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png'/>
                <span class='team__name'>Barcelona</span>
            </div>
        </div>
    </div>
    <div class='button-group'>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN1")'>CH1</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN2")'>CH2</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN3")'>CH3</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=USANETWORK")'>CH4</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=NBC")'>HC4</button>
    </div>
</div>
<div class='event-card'>
    <div class='event-header'>
        <span>Premier League</span>
    </div>
    <div class='event-content'>
        <div class='match-info'>
            <div class='team__home'>
                <img alt='Team Home' class='team__logo' src='https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png'/>
                <span class='team__name'>Real Madrid</span>
            </div>
            <div class='match-time'>
                <div class='match-datetime' data-target-date='2024-12-04'>
                    <!-- Tanggal akan diperbarui oleh script -->
                    04 Desember 2024
                </div>
                <div class='match-hour' data-target-time='15:00'>
                    <!-- Jam akan diperbarui oleh script -->
                    15:00
                </div>
                <div class='countdown'>
                    <!-- Countdown akan diperbarui oleh script -->
                    Loading...
                </div>
            </div>
            <div class='team__away'>
                <img alt='Team Away' class='team__logo' src='https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png'/>
                <span class='team__name'>Barcelona</span>
            </div>
        </div>
    </div>
    <div class='button-group'>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN1")'>CH1</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN2")'>CH2</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=BEIN3")'>CH3</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=USANETWORK")'>CH4</button>
        <button class='stream-button' onclick='changeStream("https://listcanal.blogspot.com/?id=NBC")'>HC4</button>
    </div>
</div>

<!-- Tambahkan jadwal lainnya seperti ini -->
</div>


   `,
        sports: `
             <!--   <div class='event-card'>
                    <div class='event-header'>
                        <span>Channel 1</span>
                    </div>
                    <div class='event-content'>
                        <p>Watch live sports here!</p>
                    </div>
                </div>-->
            `,
        live: `
           <!--     <div class='event-card'>
                    <div class='event-header'>
                        <span>Live TV</span>
                    </div>
                    <div class='event-content'>
                        <p>Stream your favorite channels live.</p>
                    </div>
                </div>-->
            `
    };

    // Function to load content in the sidebar
    function loadSection(sectionName) {
        const sidebar = document.getElementById('sidebar');
        sidebar.innerHTML = contentData[sectionName] || '<p>No content available.</p>';
    }

    // Initialize default content
    loadSection('events');

    // Update navigation event listener
    document.querySelectorAll('.nav__button').forEach(button => {
        button.addEventListener('click', () => {
            // Set active state for buttons
            document.querySelectorAll('.nav__button').forEach(btn => btn.classList.remove('nav__button--active'));
            button.classList.add('nav__button--active');

            // Load the corresponding section content
            const section = button.dataset.section;
            loadSection(section);
        });
    });

