package pocketbase

import "fmt"

func (c *Client) Delete(collection string, id string) (map[string]interface{}, error) {
	return c.do("DELETE", fmt.Sprintf("/api/collections/%s/records/%s", collection, id), nil)
}
