import {Logger} from './logger/src'

const logger = new Logger({dateTimeTimezone:'Asia/Shanghai'})
logger.silly('aefef')
logger.info('info')
logger.warn('warn')
logger.debug({name:'debug'})