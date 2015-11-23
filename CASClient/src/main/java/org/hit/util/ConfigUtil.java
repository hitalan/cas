package org.hit.util;
import java.io.IOException;
import java.util.Properties;
import java.util.regex.Pattern;
public enum ConfigUtil {
	INSTANCE;
	
	private Properties config;
	
	private ConfigUtil(){
		config = new Properties();
		try {
			config.load(ConfigUtil.class.getResourceAsStream("/config.properties"));
			System.out.println("Load /config.properties SUCCESS...");
		} catch (IOException e) {
			System.out.println("Load /config.properties Error...");
			e.printStackTrace();
			throw new ExceptionInInitializerError("加载系统配置文件失败...");
		}
	}

	public String getProperty(String key){
		return config.getProperty(key);
	}
	
	public int getPropertyForInt(String key){
		return Integer.parseInt(config.getProperty(key));
	}
	
	public String getPropertyBySysKey(String key){
		String value = config.getProperty(key);
		if(null!=value && Pattern.compile("\\$\\{\\w+(\\.\\w+)*\\}").matcher(value).find()){
			String sysKey = value.substring(value.indexOf("${")+2, value.indexOf("}"));
			value = value.replace("${"+sysKey+"}", System.getProperty(sysKey));
		}
		return value;
	}
}