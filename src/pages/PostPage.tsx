import React from 'react';
import Layout from "../components/layout/Layout";
import Sidemenu from "../components/sidemenu/Sidemenu";
import MarkdownViewer from '../components/post/MarkdownViewer';

const PostPage = () => {
    const markdown = '리액트 ~~생태계~~에서 사용되는 상태 관리 라이브러리는 대표적으로 **Redux** 와 **MobX** 가 있습니다. 이 둘의 특징을 배워보고 직접 사용하면서 알아가봅시다.\n\n## 상태 관리 라이브러리의 필요성\n\n상태 관리 라이브러리란게, 과연 필요할까요? 무조건 필요하지는 않습니다. 하지만 한가지는 확실합니다. 규모가 큰 앱에선 있는게, 확실히 편합니다. 제가 존경하는 개발자이면서도.. 리덕스의 라이브러리의 창시자인 Dan Abramov 는 말합니다. ["You might not need Redux"](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) [(번역)](https://medium.com/@Dev_Bono/%EB%8B%B9%EC%8B%A0%EC%97%90%EA%B2%8C-redux%EB%8A%94-%ED%95%84%EC%9A%94-%EC%97%86%EC%9D%84%EC%A7%80%EB%8F%84-%EB%AA%A8%EB%A6%85%EB%8B%88%EB%8B%A4-b88dcd175754)\n\n실제로, 여러분은 리덕스 없이도 좋은 앱을 만들 수 있습니다. 상태 관리 라이브러리가 없으면, 이전에는 글로벌 상태 관리를 하기에 조금 번거로웠는데 리액트 16.3 에서 [Context API](https://react-context.vlpt.us/03.html) 가 더욱 좋아지면서 글로벌 상태 관리 또한 별도의 라이브러리 없이 할 수 있게 되었습니다.\n\n> 글로벌 상태 관리란, 컴포넌트 간의 데이터 교류, 특히 부모-자식 관계가 아닌 컴포넌트끼리 데이터 교류를 하는것을 의미합니다.\n\n하지만, 그럼에도 불구하고 저는 상태 관리 라이브러리를 결국에는 배워보는걸 권장합니다. 모르고 안 쓰는거랑, 알고 안 쓰는거랑 다르기 때문이죠.\n\n```javascript\nvar a = 1;\n```';
    return(
    <Layout>
        <Sidemenu/>
        <MarkdownViewer markdown={markdown}/>
    </Layout>
        );
}

export default PostPage;