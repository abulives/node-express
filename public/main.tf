provider "restapi" {
  uri                  = "http://127.0.0.1:8080/"
  debug                = true
  write_returns_object = true
}


# This will ADD the user named "Foo" as a managed resource
resource "restapi_object" "Mso_object" {
  path = "/ott.cognizant.com/fake/mso"
  data = "{ \"id\": \"${var.mso_ref_id}\", \"name\": \"MSO_1\"}"
}
resource "restapi_object" "Locality_object" {
  path = "/ott.cognizant.com/fake/locality"
  data = "{ \"id\": \"2\", \"name\": \"California\"}"
}
resource "restapi_object" "Channel_object" {
  path = "/ott.cognizant.com/fake/channel"
  data = "{ \"id\":  \"${var.chn_ref_id}\", \"name\": \"Stsr Sports\"}"
}
resource "restapi_object" "Mso_locality_object" {
  path = "/ott.cognizant.com/fake/mso_locality"
  data = "{ \"id\": \"${var.Mso_locality_ref_id}\", \"name\": \"Newyork\", \"mso_ref_id\": \"${var.mso_ref_id}\"}"
}
resource "restapi_object" "Packaged_service_object" {
  path = "/ott.cognizant.com/fake/packaged_service"
  data = "{ \"id\":  \"${var.pack_ser_ref_id}\", \"name\": \"packaged_service\", \"channel_num\": \"${var.chn_ref_id}\" , \"Mso_locality_ref_id\": \"${var.Mso_locality_ref_id}\"}"
}
resource "restapi_object" "Linearpackagecategories_object" {
  path = "/ott.cognizant.com/fake/linearpackagecategories"
  data = "{ \"id\": \"${var.linear_cat_ref_id}\", \"name\": \"linearpackagecategories\"}"
}
resource "restapi_object" "LinearpackageServices_object" {
  path = "/ott.cognizant.com/fake/linearpackageServices"
  data = "{ \"id\": \"7\", \"name\": \"linearpackageServices\", \"linear_cat_ref_id\": \"${var.linear_cat_ref_id}\", \"pack_ser_ref_id\": \"${var.pack_ser_ref_id}\"}"
}

