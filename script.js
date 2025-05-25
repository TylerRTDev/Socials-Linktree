        // Binary rain effect
        const canvas = document.getElementById('binaryRain');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const binary = "01";
        const binaryChars = binary.split("");
        
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for(let x = 0; x < columns; x++) {
            drops[x] = Math.random() * canvas.height / fontSize;
        }
        
        function drawBinary() {
            ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px JetBrains Mono';
            
            for(let i = 0; i < drops.length; i++) {
                const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawBinary, 100);

        // Resize handler
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Add typing effect to command lines
        document.addEventListener('DOMContentLoaded', function() {
            const commandLines = document.querySelectorAll('.command-line');
            commandLines.forEach((line, index) => {
                line.style.opacity = '0';
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.animation = 'typewriter 0.8s steps(40, end)';
                }, index * 200);
            });

            // Animate links
            const links = document.querySelectorAll('.link-item');
            links.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    link.style.transition = 'all 0.5s ease';
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, 1000 + index * 100);
            });
        });

        // Click tracking
        document.querySelectorAll('.link-item').forEach(link => {
            link.addEventListener('click', function(e) {
                const linkName = this.querySelector('.link-name').textContent;
                console.log(`Executing: ${linkName}`);
                
                // Add terminal feedback
                const terminal = document.querySelector('.terminal-content');
                const feedback = document.createElement('div');
                feedback.className = 'output';
                feedback.innerHTML = `<span class="highlight-green">Launching ${linkName}...</span>`;
                feedback.style.opacity = '0';
                terminal.appendChild(feedback);
                
                setTimeout(() => {
                    feedback.style.transition = 'opacity 0.3s';
                    feedback.style.opacity = '1';
                }, 10);
            });
        });

        // Add glitch effect occasionally
        setInterval(() => {
            if (Math.random() < 0.1) {
                document.body.style.filter = 'hue-rotate(10deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 50);
            }
        }, 5000);
