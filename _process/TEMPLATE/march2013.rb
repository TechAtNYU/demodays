require 'csv'

applicants = CSV.open("2013-3-9.csv")

applicants.each do |applicant|
  # could not get symbol headers to work for this CVS file, using indexes instead 
  md = String.new 
  md += "---\n"
  md += "layout: post\n"
  md += "title: #{applicant[2]}\n"
  # these markdown files seem to need indictators to exterior resources, 
  # such as projects, to be prefixed with an "http://"    
  # the following line tests whether the given link has this prefix & adds it in the case it is not 
  #(applicant[3] == false) ? next : ((applicant[3][0..6] == "http://") || (applicant[3][0...7] == "https://") ? md += "site: #{applicant[3]}\n" : md += "site: http://#{applicant[3]}\n")
  if applicant[3] == "#"
    md += ""
  elsif applicant[3][0..6] == "http://" || applicant[3][0..7] == "https://"
    md += "site: #{applicant[3]}\n"
  else
    md += "site: http://#{applicant[3]}\n"
  end
  #md += "site: \n"
  md += "image:\n"
  md += "category: demo \n"
  md += "whichdd: March 2013\n"
  md += "maker:\n"
  md += "- name: #{applicant[0]}\n"
  md += "  school: #{applicant[1]}\n"
  md += "  twitter: false\n"
  md += "---\n"
  md += "#{applicant[4]}\n"
  fn = "13-03-0000-#{applicant[2].delete(",.? ").downcase}.md"
  File.open(fn, 'w') do |md_file|
    md_file.puts md 
  end 
end 
