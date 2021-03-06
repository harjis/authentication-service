# How to run locally:

```shell script
kubectl create secret generic pgpassword --from-literal OKTA_CLIENTID=put_client_id_here
kubectl create secret generic pgpassword --from-literal OKTA_ISSUER=put_issuer_here
minikube addons enable ingress
sudo ssh -i $(minikube ssh-key) docker@$(minikube ip) -L 80:localhost:80
skaffold dev
```

With ssh-tunnel you can access minikube environment on http://localhost
This is needed because okta authorization can be used on HTTPS or Origin: localhost only
Accessing minikube ip directly does not work

# How to use as Helm Chart

1. Add helm repo
```shell script
helm repo add harjis-charts https://harjis.github.io/helm-charts/
```

4. Install service with
````shell script
helm install authentication-service harjis-charts/authentication-service
````
