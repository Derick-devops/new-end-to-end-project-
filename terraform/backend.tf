terraform {
  backend "s3" {
    bucket       = "sam-todoproject-bucket"
    key          = "todo-app/terraform.tf-state"
    region       = "eu-north-1"
    encrypt      = true
    use_lockfile = true
  }
}