# How to setup

1. Create values.yaml file in the repository 
where authenticator is going to be installed from

```yaml
backendHost: backend-cluster-ip-service
backendPort: 3000
```

2. Create secrets for okta
```shell script
kubectl create secret generic oktaclientid --from-literal OKTA_CLIENTID=my-id
kubectl create secret generic oktaissuer --from-literal OKTA_ISSUER=my-issuer
```

3. Add helm repo
```shell script
helm repo add harjis https://harjis.github.io/authenticator/
```

4. Install authenticator with
````shell script
helm install authenticator harjis/authenticator -f authenticator_values.yaml
````

5. Route all backend traffic through the authenticator:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
    - http:
        paths:

          - path: /api/
            pathType: Prefix
            backend:
              service:
                name: authenticator-cluster-ip-service
                port:
                  number: 3000 
```

6. Can be uninstalled with
````shell script
helm uninstall authenticator
````
