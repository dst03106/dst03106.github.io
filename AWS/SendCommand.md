---
tags:
  - AWS
---

### 배경

여러 인스턴스에 명령을 보내 프로세스를 stop 해야 했다.
인스턴스에 접속해 하나 하나 명령을 썼었는데, aws 에서 역시 여러 인스턴스에 명령을 보낼 수 있는 방법이 있는 것을 알게 되어 해당 방법을 사용해보려고 한다.

### 테스트

우선 AWS Run command 문서를 참조하여 아래 명령을 보냈다.

```
aws ssm send-command \
    --instance-ids "instance-ID" \
    --document-name "AWS-RunShellScript" \
    --comment "IP config" \
    --parameters commands=ifconfig \
    --output text
```

(참고 링크 : https://docs.aws.amazon.com/ko_kr/systems-manager/latest/userguide/walkthrough-cli.html#walkthrough-cli-example-1)

### 트러블슈팅

#### 1. ssm:SendCommand 시 AccessDeniedException 발생

```
An error occurred (AccessDeniedException) when calling the SendCommand operation:
~~
because no identity-based policy allows the ssm:SendCommand action
```

iam 권한을 ssm:SendCommand 만 주었었는데 ssm:`*`로 변경하니 위 에러가 나지 않았다.
위 권한 관련 에러를 조사하면서 첫번째, AWS는 `identity-based policies`와 `resource-based policies`를 갖고 있는 것을 알게 되었다. 또한 둘 중 하나만 충족해도 되지 않는다. (참고 링크 : https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html)
궁금해진 것은 `identity` 권한은 iam에 정의하면 되지만 `resource` 권한은 어디에 정의되는 것일까
두번째로 테스트 커맨드 명령의 파라미터에 `--document-name` 이 있는데 말 그대로 스크립트 문서를 만들면 그 이름으로 해당 명령을 실행시킬 수 있는 것 같다.

### 다음에 해보려고 하는 것

aws 로그를 볼 수 있는

-
