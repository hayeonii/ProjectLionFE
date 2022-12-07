import DiaryForm from './DiaryForm'
import styles from './Home.module.css'

export default function Home() {
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm />
            </aside>
            <ul className={styles.content_list}>
                {/* 사용자가 이전에 작성한 일기 목록 */}
                다이어리 리스트
            </ul>
        </main>
    )
}