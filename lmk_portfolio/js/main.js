tailwind.config = {
    theme: {
        extend: {
            colors: {
                industrialBg: '#0A0A0A',
                electricBlue: '#00E5FF',
                warningOrange: '#FF6600',
            },
            fontFamily: {
                sans: ['Space Grotesk', 'Inter', 'OPPO Sans', 'HarmonyOS Sans', 'Helvetica Neue', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 229, 255, 0.05)',
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const heroVideo = document.getElementById('heroVideo');
    const heroVideoOverlay = document.getElementById('heroVideoOverlay');
    const heroContent = document.getElementById('heroContent');
    
    if (heroVideo) {
        heroVideo.addEventListener('loadedmetadata', () => {
            const fadeStartTime = 3000;
            const videoDuration = heroVideo.duration * 1000;
            const fadeDuration = videoDuration - fadeStartTime;
            
            if (heroVideoOverlay) {
                heroVideoOverlay.style.transition = `opacity ${fadeDuration}ms ease-out`;
            }
            
            setTimeout(() => {
                if (heroVideoOverlay) {
                    heroVideoOverlay.style.opacity = '0';
                    heroVideoOverlay.style.pointerEvents = 'none';
                }
                if (heroContent) {
                    heroContent.style.opacity = '1';
                }
            }, fadeStartTime);
            
            heroVideo.addEventListener('ended', () => {
                if (heroVideoOverlay) {
                    heroVideoOverlay.style.display = 'none';
                }
            });
        });
    }

    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    }

    const ctx = document.getElementById('skillsRadarChart');
    if (ctx) {
        Chart.defaults.font.family = 'Space Grotesk, HarmonyOS Sans, sans-serif';
        Chart.defaults.color = 'rgba(255, 255, 255, 0.6)';

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['UI/UX', 'B端低代码/高密布局', 'PRD/产品架构', '三维模型', 'AI敏捷开发(Cursor)', '全链路协同沟通'],
                datasets: [{
                    label: '能力定级 (SYS_MATRIX)',
                    data: [92, 95, 88, 90, 85, 89],
                    fill: true,
                    backgroundColor: 'rgba(0, 229, 255, 0.12)',
                    borderColor: '#00E5FF',
                    pointBackgroundColor: '#00E5FF',
                    pointBorderColor: '#0A0A0A',
                    pointHoverBackgroundColor: '#0A0A0A',
                    pointHoverBorderColor: '#FF6600',
                    borderWidth: 1.5,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.08)'
                        },
                        grid: {
                            color: 'rgba(0, 229, 255, 0.08)'
                        },
                        pointLabels: {
                            font: {
                                size: 11
                            },
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        ticks: {
                            display: false,
                            maxTicksLimit: 5
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
});