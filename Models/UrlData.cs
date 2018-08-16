using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace ShortUrl.Models
{
    public class UrlData
    {
        private string ConnectionString =
            "server=yakymenko.com;port=3306;database=test;user=yuriy;password=Slsuaua03101993!;SslMode=none;";

        // Show all url's in the database
        public IEnumerable<Url> GetAllUrls()
        {
            try
            {
                List<Url> Urls = new List<Url>();
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    string sql = "select * from url";
                    MySqlCommand cmd = new MySqlCommand(sql, con);
                    con.Open();
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Url url = new Url();
                        url.Id = rdr["id"].ToString();
                        url.UrlOriginal = rdr["url"].ToString();
                        url.UrlShort = rdr["short_url"].ToString();
                        url.Date = Convert.ToDateTime(rdr["date"]);
                        url.Ip = rdr["ip"].ToString();
                        url.Count = Convert.ToInt32(rdr["count"]);
                        Urls.Add(url);
                    }
                    con.Close();
                }
                return Urls;
            }
            catch
            {
                throw;
            }
        }
        //To Add new url record 

        public int AddUrl(string id, string url, string ip, string baseUrl)
        {
            try
            {
   
                
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    //string sql = "";
                    string sql = "insert into url (id, url, short_url, ip, count) values ('"+id+"','"+url+"','"+baseUrl+"/Go/"+id+"', '"+ip+"', 0)";
                    MySqlCommand cmd = new MySqlCommand(sql, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Count update
        public int UpdateUrlCount(string id)
        {
            try
            {
                using (MySqlConnection con = new MySqlConnection(ConnectionString))

                {
                    string sql = "update url set count=count+1 WHERE id='"+id+"'";
                    MySqlCommand cmd = new MySqlCommand(sql, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular url

        public Url GetUrlData(string id)
        {
            try
            {
                Url url = new Url();
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    string sql = "SELECT * FROM url WHERE id='"+id+"'";
                    MySqlCommand cmd = new MySqlCommand(sql, con);
                    con.Open();
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        url.Id = rdr["id"].ToString();
                        url.UrlOriginal = rdr["url"].ToString();
                        url.UrlShort = rdr["short_url"].ToString();
                        url.Date = Convert.ToDateTime(rdr["date"]);
                        url.Ip = rdr["ip"].ToString();
                        url.Count = Convert.ToInt32(rdr["count"]);
                    }
                }
                return url;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record on a particular url

        public int DeleteUrl(string id)
        {
            try
            {
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {

                    string sql = "DELETE FROM url WHERE id='" + id + "'";
                    MySqlCommand cmd = new MySqlCommand(sql, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}