﻿// -----------------------------------------------------------------------------
// 让 .NET 开发更简单，更通用，更流行。
// Copyright © 2020-2021 Furion, 百小僧, Baiqian Co.,Ltd.
//
// 框架名称：Furion
// 框架作者：百小僧
// 框架版本：2.10.6
// 源码地址：Gitee： https://gitee.com/dotnetchina/Furion
//          Github：https://github.com/monksoul/Furion
// 开源协议：Apache-2.0（https://gitee.com/dotnetchina/Furion/blob/master/LICENSE）
// -----------------------------------------------------------------------------

using Furion.DependencyInjection;
using Microsoft.Extensions.Configuration;
using System;

namespace Furion.Extensions
{
    /// <summary>
    /// IConfiguration 拓展类
    /// </summary>
    [SuppressSniffer]
    public static class IConfigurationExtensions
    {
        /// <summary>
        /// 重载配置
        /// </summary>
        /// <param name="configuration"></param>
        /// <param name="serviceProvider"></param>
        /// <returns></returns>
        public static IConfiguration Reload(this IConfiguration configuration, IServiceProvider serviceProvider = default)
        {
            _ = configuration;
            return App.Configuration = App.GetService<IConfiguration>(serviceProvider ?? App.RootServices);
        }
    }
}