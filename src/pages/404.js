/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import Exception from '@components/Exception';

export default function () {
  return (
    <Exception
      type={404}
      backText={'返回首页'}
      title={'404'}
      desc={'抱歉，你访问的页面不存在'}
    />
  );
}
