import { PureComponent } from 'react';
import PageHeader from '@components/PageHeader';
import styles from './index.less';
export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {
        const routes = [
            {
                path: '/',
                breadcrumbName: 'home',
            },
            {
                breadcrumbName: 'flex',
            },
        ];
        return (
            <PageHeader
                title={'flex'}
                routes={routes}
            >
                <div className={styles.container}>
                    <h2>上-中-下</h2>
                    <div className={styles.demo1}>
                        <header>Header</header>
                        <article>CONTENT</article>
                        <footer>FOOTER</footer>
                    </div>
                    <h2>上-中(左-右)-下</h2>
                    <div className={styles.demo2}>
                        <header>Header</header>
                        <div className={styles.content}>
                            <aside>ASIDE</aside>
                            <article>CONTENT</article>
                        </div>
                        <footer>FOOTER</footer>
                    </div>
                    <h2>上-下(左-右)</h2>
                    <div className={styles.demo3}>
                        <aside>ASIDE</aside>
                        <div className={styles.content}>
                            <header>Header</header>
                            <article>CONTENT</article>
                            <footer>FOOTER</footer>
                        </div>
                    </div>
                </div>
            </PageHeader>
        );
    }
}